import React from "react";

export interface PropsTypeOne {
  className?: string;
  children: React.ReactNode;
}

export interface PropsTypeTwo {
  className?: string;
  text: string;
}

export interface PropsTypeThree {
  icon: string;
}

export interface AuthProps {
  email: string;
  password: string;
  userName: string;
}
