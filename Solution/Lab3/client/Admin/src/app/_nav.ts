/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */
import { INavData } from './models';

export const navItems: INavData[] = [
  {
    name: '首页',
    url: '/dashboard',
    icon: 'insights',
  },
  {
    name: '租户',
    url: '/tenants',
    icon: 'groups',
  },
  {
    name: '用户',
    url: '/users',
    icon: 'supervisor_account',
  },
];
