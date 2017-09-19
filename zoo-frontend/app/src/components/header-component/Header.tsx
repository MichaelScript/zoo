import * as React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
  <div>
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rest"> Sample Rest Call</Link></li>
        </ul>
      </nav>
    </header>
  </div>
);
