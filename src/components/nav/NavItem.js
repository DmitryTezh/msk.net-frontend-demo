/**
 * Created by DIMOS on 19.03.2017.
 */
import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import omit from 'lodash/omit';

export const NavItem = ({
    to,
    activeStyle = { fontWeight: "bold", color: "red" },
    activeClassName,
    exact = false,
    children,
    ...props
}) => (
    <li>
        <NavLink {...{ to, activeStyle, activeClassName, exact, ...omit(props, ['active','activeKey','activeHref']) }}>
            {children}
        </NavLink>
    </li>
);

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    activeStyle: PropTypes.object,
    activeClassName: PropTypes.string,
    exact: PropTypes.bool,
    children: PropTypes.node.isRequired
};

export const NavIndex = (props) => (
    <NavItem exact {...props} />
);

NavIndex.propTypes = NavItem.propTypes;