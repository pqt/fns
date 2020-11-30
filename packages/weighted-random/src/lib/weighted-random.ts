export type Item = [string, number];
export type Items = Item[];

export const weightedRandom = (items: Items) => {
  // First, we loop the main dataset to count up the total weight. We're starting the counter at one because the upper boundary of Math.random() is exclusive.
  let total = 1;
  for (let i = 0; i < items.length; ++i) {
    total += items[i][1];
  }

  // Total in hand, we can now pick a random value akin to our
  // random index from before.
  const threshold = Math.floor(Math.random() * total);

  // Now we just need to loop through the main data one more time
  // until we discover which value would live within this
  // particular threshold. We need to keep a running count of
  // weights as we go, so let's just reuse the "total" variable
  // since it was already declared.
  total = 0;
  for (let i = 0; i < items.length; ++i) {
    // Add the weight to our running total.
    total += items[i][1];

    // If this value falls within the threshold, we're done!
    if (total >= threshold) {
      return items[i][0];
    }
  }
};
