import React from 'react';
import { Link } from 'react-router-dom';
// import { siteConfig } from '../../settings';

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="./">
              <i/>
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="./">Grace SLP</Link>
        </h3>
      )}
    </div>
  );
};
