<template>
  <div class="content edit_container">
    <quill-editor
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
        @change="onEditorChange($event)">
    </quill-editor>
    <button @click="saveHtml">保存</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: `<p>hello world</p>`,
      editorOption: {
        theme: 'snow',
           modules: {
        toolbar: [   //下面是控制工具栏的展示功能 见 https://blog.csdn.net/qq_36947168/article/details/119486710
                       // https://www.kancloud.cn/liuwave/quill/1409378
          ['bold', 'italic',  'strike','image',{ 'list': 'ordered'}, { 'list': 'bullet' }, 'code-block','blockquote'],
          // ['blockquote', 'code-block'],
          // [{ 'header': 1 }, { 'header': 2 }],
          // [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          // [{ 'script': 'sub'}, { 'script': 'super' }],
          // [{ 'indent': '-1'}, { 'indent': '+1' }],
          // [{ 'direction': 'rtl' }],
          // [{ 'size': ['small', false, 'large', 'huge'] }],
          // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          // [{ 'color': [] }, { 'background': [] }],
          // [{ 'font': [] }],
          // [{ 'align': [] }],
          // ['clean'],
          // ['image'],
          // ['video']
        ]
      }
      },
     
    }
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    onEditorReady () { // 准备编辑器
    },
    onEditorBlur () {}, // 失去焦点事件
    onEditorFocus () {}, // 获得焦点事件
    onEditorChange () {}, // 内容改变事件
    saveHtml () {
      console.log(this.content,'evnt');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>