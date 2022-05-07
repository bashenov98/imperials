import React, { Fragment } from 'react';
import RcDrawer from 'rc-drawer';

function DrawerComponent ({
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement,
    drawerStyle,
    closeBtnStyle,
    ...props
}) {
  return (
    <Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${className} || ''}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration={'0.4s'}
        {... props}
      >
        {closeButton && (
          <div as="div" onClick={toggleHandler} sx={closeBtnStyle}>
            {closeButton}
          </div>
        )}
        <div sx={drawerStyle}>{children}</div>
      </RcDrawer>
      <div className="drawer__handler" style={{display: 'inline-block'}} onClick={toggleHandler}>
          {drawerHandler}
      </div>
    </Fragment>
  );
};

DrawerComponent.defaultProps = {
  width: '100%',
  placement: 'left',
};

export default DrawerComponent;

