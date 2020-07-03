<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-input value="中文"></g-input>
    <g-input value="不可更改" disabled></g-input>
    <g-input value="内容只读" readonly></g-input>
    <g-input value="错误提示" error="输入错误"></g-input>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import GInput from "../../../src/input";

export default {
  components: { GInput },
  data() {
    return {
      selected: "1",
      content: `
        <g-input value="中文"></g-input>
        <g-input value="不可更改" disabled></g-input>
        <g-input value="内容只读" readonly></g-input>
        <g-input value="错误提示" error="输入错误"></g-input>
      `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>
<style lang="scss" scoped>
input {
  padding: 100px 5px;
}
</style>