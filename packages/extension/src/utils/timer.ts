export default async function timer(time: number) {
  return await new Promise<void>((resolve) => {
    setTimeout(() => resolve(), time);
  });
}