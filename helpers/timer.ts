const allParts = ['h', 'm', 's', 'ms']

const getTimePartsFromFormat = (format: string) => {
  const parts = format.split(':');

  return parts.filter((part) => allParts.includes(part));
}

const formatTimer = (ms: number, format: string = 'h:m:s') => {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = Math.floor(ms % 1000);

  const parts = getTimePartsFromFormat(format);
  
  const formatTimerArray = parts.reduce((acc, part) => {
    switch (part) {
      case 'h':
        if (!hours) {
          return acc;
        }

        acc.push(String(hours).padStart(2, '0'));
        break;
      case 'm':
        acc.push(String(minutes).padStart(2, '0'));
        break;
      case 's':
        acc.push(String(seconds).padStart(2, '0'));
        break;
      case 'ms':
        acc.push(String(milliseconds).padStart(3, '0'));
        break;
    }

    return acc;
  }, [] as string[]);

  return formatTimerArray.join(':');
}

export {
  formatTimer
};