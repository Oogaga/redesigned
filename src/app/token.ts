import {InjectionToken} from '@angular/core';
import {UsersService} from "./services/users.service";

export const BASE_URL_TOKEN = new InjectionToken<string>('BASE_URL_TOKEN');
