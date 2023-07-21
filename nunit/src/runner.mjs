import path from "path";

export const run = async () => {
  try {
    await import(path.resolve(process.cwd(), "test/tests.mjs"));
  } catch (err) {
    console.error(err);
  }

  console.log("Test run finished");
};
