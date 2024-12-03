export default defineEventHandler(async (event) => {
  const { cloudflare } = event.context;
  const { KV } = cloudflare.env;

  const rawData = (await KV.get('events', { type: 'json' })) as TiAEvents;

  if (!rawData) {
    return [];
  }

  const sortedEvents = Object.entries(rawData)
    .map(([id, data]) => ({
      id,
      ...data,
    }))
    .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

  return sortedEvents;
});
