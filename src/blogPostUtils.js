export const postLogic = {
  data() {
    return {
      readTime: 0,
      postContent: [],
      isBodyVisible: false,
    };
  },
  methods: {
    calcReadTime(postContents) {
      let totalWordCount = 0;
      postContents.forEach((postContent) => {
        const words = postContent.textContent.trim().split(/\s+/);
        totalWordCount += words.length;
      });

      console.log("totalWordCount:", totalWordCount);

      this.readTime = Math.ceil(totalWordCount / 200);
    },

    toggleBody() {
      this.isBodyVisible = !this.isBodyVisible;
    },
  },
};
