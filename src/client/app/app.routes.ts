import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { LoginRoutes, PrivateRoutes} from './shared/login/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...LoginRoutes,
  ...PrivateRoutes
];
