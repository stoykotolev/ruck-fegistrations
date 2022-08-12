// Get the twitter root level element via ID
const twitterRoot = document.getElementById("react-root");

// Mutation observer configuration// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      // Target the layers element that needs to be hidden
      const layersElement = document.getElementById("layers");
      layersElement.style.display = "none";
      document.documentElement.style.overflowY = "scroll";
      isHidden = true;
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(twitterRoot, config);
