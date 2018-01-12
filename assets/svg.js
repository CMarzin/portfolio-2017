// import React from 'react';
// import cx from 'classnames';
// import styles from './icon.scss';

const svgClassname = (className, size, modifier, inline) =>
  cx({
    [className]: className,
    [styles.root]: true,
    [styles[size]]: size,
    [styles[modifier]]: modifier,
    [styles.sizeDefault]: !size,
    [styles.modifierDefault]: !modifier,
    [styles.inline]: inline
  });

const Icon = ({ className, id, size, modifier, inline }) => {
  const useEl = `<use class="${
    styles.use
  }" xlink:href="/dist/images/icons.svg#${id}" />`;

  return (
    <svg
      className={svgClassname(className, size, modifier, inline)}
      dangerouslySetInnerHTML={{ __html: useEl }}
    />
  );
};

export default Icon;
