import { CanActivateFn } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  // isAdmin is a variable that determines if we can or cannot navigate to the protected route
  // localStorage is a web API that allows us to store data in the browser - it persists even after the browser is closed
  // In an actual application you would likely use cookies returned from your API to determine permissions
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  if (!isAdmin) {
    alert('You do not have permission to access this page.');
    return false;
  }

  return true;
};
