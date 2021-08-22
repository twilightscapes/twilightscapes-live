const React = require('react');
const config = require('./gatsby-config');

exports.onRenderBody = ({ pathname, setFooterComponents }) => {
  setFooterComponents([
    <a rel="canonical" href={`${config.siteMetadata.siteURL}${pathname}`}>FUCK</a>,
  ]);
};