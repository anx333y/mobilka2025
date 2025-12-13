type LastOfArray<T extends any[]> = [any, ...T][T['length']];

type Pipe1 = <
  Func1 extends (...args: any) => any
>
(...fns: [Func1]) =>
  (...args: Parameters<Func1>) => ReturnType<Func1>;

type Pipe2 = <
  Func1 extends (...args: [ReturnType<Func2>]) => any,
  Func2 extends (...args: any) => any
>
(...fns: [Func1, Func2]) =>
  (...args: Parameters<Func2>) => ReturnType<Func1>;

type Pipe3 = <
  Func1 extends (...args: [ReturnType<Func2>]) => any,
  Func2 extends (...args: [ReturnType<Func3>]) => any,
  Func3 extends (...args: any) => any
>
(...fns: [Func1, Func2, Func3]) =>
  (...args: Parameters<Func3>) => ReturnType<Func1>;

type Pipe4 = <
  Func1 extends (...args: [ReturnType<Func2>]) => any,
  Func2 extends (...args: [ReturnType<Func3>]) => any,
  Func3 extends (...args: [ReturnType<Func4>]) => any,
  Func4 extends (...args: any[]) => any
>
(...fns: [Func1, Func2, Func3, Func4]) =>
  (...args: Parameters<Func4>) => ReturnType<Func1>;

type BigPipe = <
  Func1 extends (...args: [ReturnType<Func2>]) => any,
  Func2 extends (...args: [ReturnType<Func3>]) => any,
  Func3 extends (...args: [ReturnType<Func4>]) => any,
  Func4 extends (...args: any[]) => any,
  Tail extends [((...args: any[]) => any), ...((...args: any[]) => any)[]]
>
(...fns: [Func1, Func2, Func3, Func4, ...Tail]) =>
  (...args: Parameters<LastOfArray<Tail>>) => ReturnType<Func1>;

type Pipe = Pipe1 & Pipe2 & Pipe3 & Pipe4 & BigPipe;

/**
 * Соединяет переданные функции в конвейер справа налево
 *
 * P.S. Проверка совместимости типов функций между собой
 * осуществяется по 4 переданную включительно
 */
const compose: Pipe = (...fns: ((...args: any[]) => any)[]) => (...args: any[]) =>
  fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

type Fn = (...args: any) => any;

type First<T extends unknown[]> =
  T extends [infer U, ...infer _] ?
    U :
    never;

type Last<T extends unknown[]> =
  T extends [...infer _, infer U] ?
    U :
    never;

type FirstParametersOf<T extends Fn[]> =
  First<T> extends Fn
    ? First<Parameters<First<T>>>
    : never;

type LastReturnOf<T extends Fn[]> =
  Last<T> extends Fn
    ? ReturnType<Last<T>>
    : never
;

type PipeChain<
  T extends Fn[],
  Cache extends Fn[] = []
> =
  T extends []
    ? Cache
    : T extends [infer Fst]
      ? Fst extends Fn
        ? PipeChain<[], [Fst, ...Cache]> : never
      : T extends [infer Fst, ...infer Lst]
        ? Fst extends Fn
          ? Lst extends Fn[]
            ? First<Lst> extends Fn
              ? ReturnType<Fst> extends First<Parameters<First<Lst>>>
                ? PipeChain<Lst, [Fst, ...Lst]>
                : never
              : never
            : never
          : never
        : never;

type PipeArgs<Fns extends Fn[]> = {
  0: [never];
  1: [FirstParametersOf<Fns>];
}[PipeChain<Fns> extends never ? 0 : 1];

const pipe = <T extends Fn, Fns extends T[], Args extends PipeArgs<Fns>>(...fns: [...Fns])
  : (...args: Args) => LastReturnOf<Fns> =>
    (...args) =>
      fns.reduce((res, fn) => [fn.call(null, ...res)], args)[0];

export {compose, pipe};
