export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path.startsWith('/dash') && to.path !== '/dash/login') {
    const isValidToken = await validateToken();
    if (!isValidToken) {
      window.localStorage.removeItem('tiaAuthToken');
      return navigateTo('/dash/login');
    }
  } else if (to.path === '/dash/login') {
    const isValidToken = await validateToken();
    if (isValidToken) {
      return navigateTo('/dash');
    } else {
      window.localStorage.removeItem('tiaAuthToken');
    }
  }
});

const validateToken = async () => {
  const token = window.localStorage.getItem('tiaAuthToken');
  if (!token) {
    return false;
  }

  try {
    const response = await fetch('/api/auth', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.ok;
  } catch (error) {
    console.error('Token validation failed:', error);
    return false;
  }
};
