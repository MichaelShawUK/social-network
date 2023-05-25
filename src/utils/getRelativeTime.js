const getRelativeTime = (timestamp) => {
  const rtf = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });

  let difference = Math.round(
    (new Date(timestamp).getTime() - new Date().getTime()) / 1000
  );

  if (difference > -60) {
    return rtf.format(difference, "second");
  }

  difference = Math.round(difference / 60);

  if (difference > -60) {
    return rtf.format(difference, "minute");
  }

  difference = Math.round(difference / 60);

  if (difference > -24) {
    return rtf.format(difference, "hour");
  }

  difference = Math.round(difference / 24);

  if (difference > -7) {
    return rtf.format(difference, "day");
  }

  difference = Math.round(difference / 7);

  return rtf.format(difference, "week");
};

export default getRelativeTime;
