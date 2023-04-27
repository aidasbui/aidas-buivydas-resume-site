const scrollIntoView = (
  state: boolean,
  ref: React.MutableRefObject<HTMLElement | null>,
  block: ScrollLogicalPosition | undefined = 'center',
) => {
  if (!state || !ref) {
    return;
  }

  const intoView = () => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
      block,
    });
  };
  const scrollTimeout = setTimeout(intoView, 200);
  return scrollTimeout;
};

export default scrollIntoView;
