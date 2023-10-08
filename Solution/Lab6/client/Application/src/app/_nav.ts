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
    name: '製品',
    url: '/products',
    icon: 'sell',
  },
  {
    name: '注文',
    url: '/orders',
    icon: 'shopping_cart',
  },
  {
    name: '用户',
    url: '/users',
    icon: 'supervisor_account',
  },
];
