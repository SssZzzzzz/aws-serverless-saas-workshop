/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */
import { INavData } from './models';

export const navItems: INavData[] = [
  {
    name: 'ダッシュボード',
    url: '/dashboard',
    icon: 'insights',
  },
  {
    name: 'テナント',
    url: '/tenants',
    icon: 'groups',
  },
  {
    name: 'ユーザー',
    url: '/users',
    icon: 'supervisor_account',
  },
];
