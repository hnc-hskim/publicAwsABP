import React, { Component } from "react";

export const servers = {
  local: {
    name: 'Local',
    url: 'http://localhost:62557/' 
  },
  test: {
    name: 'Test',
    url: 'http://ec2-3-35-207-83.ap-northeast-2.compute.amazonaws.com/' 
  },
  product: {
    name: 'Product',
    url: 'http://layoutdesignerLoadBalancer-1418351197.ap-northeast-2.elb.amazonaws.com/' 
  },
};

export const servername = 'unknown';

export const UserContext = React.createContext({
  server: servers.local,
  toggleServer: () => {},
  servername: servername,
  changeServername: () => {},
});