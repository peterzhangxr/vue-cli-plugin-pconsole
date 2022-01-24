---
extend: '@vue/cli-service/generator/template/src/App.vue'
replace:
  - !!js/regexp /Welcome to Your Vue\.js App/
  - !!js/regexp /<script>[^]*?<\/script>/
---

<%# REPLACE %>
替换欢迎信息
<%# END_REPLACE %>

<%# REPLACE %>
<script>
export default {
  // 替换默认脚本
}
</script>
<%# END_REPLACE %>