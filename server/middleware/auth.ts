export default eventHandler((event) => {
  const authToken =
    getHeader(event, 'Authorization')?.replace('Bearer ', '') || '';

  if (
    event.path.startsWith('/api/') &&
    !event.path.startsWith('/api/events') &&
    !event.path.startsWith('/api/_') &&
    authToken !== useRuntimeConfig(event).tiaAuthToken
  ) {
    console.info('authToken:', authToken);

    throw createError({
      status: 401,
      statusText: 'Unauthorized',
    });
  }
});
