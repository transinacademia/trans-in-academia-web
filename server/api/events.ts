export default defineEventHandler(async () => {
  const rawData = (await hubKV().get('events')) as TiAEvents;

  const sortedEvents = Object.entries(rawData)
    .map(([id, data]) => ({
      id,
      ...data,
    }))
    .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

  return sortedEvents;
});
