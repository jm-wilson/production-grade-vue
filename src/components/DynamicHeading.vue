<script>
import { h } from 'vue';

export default {
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
  render() {
    const { level } = this;

    if (level < 1 || level > 6) {
      console.warn('DynamicHeading was used with a level outside of 1-6');
      return;
    }

    return h(`h${level}`, 'Hello Frontend Masters!');
  },
};
</script>

<style></style>
