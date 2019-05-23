<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="my-tab">
      <el-tab-pane label="发送公告" name="first">
        <el-form :label-position="right" class="send-form">
          <el-form-item label="公告标题:">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="标题摘要:">
            <el-input
              type="textarea"
              v-model="input1"
              placeholder="请输入内容"
              :autosize="{ minRows: 4, maxRows: 10}"
            ></el-input>
          </el-form-item>
        </el-form>
        <span class="notice">公告类型:</span>
        <el-radio v-model="radio" label="1">通知消息</el-radio>
        <el-radio v-model="radio" label="2">版本更新</el-radio>
        <el-radio v-model="radio" label="3">营销活动</el-radio>
        <!-- 富文本 -->
        <div class="editor">
          <quill-editor
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)"
          ></quill-editor>
        </div>
       <router-link :to="{path:'/notice_content'}"><el-button type="primary" @click="submit">发送公告</el-button></router-link>
      </el-tab-pane>
      <el-tab-pane label="推送历史" name="second">
        <el-form :inline="true" class="demo-form-inline my-form-users">
          <!--时间日期-->
          <!-- <div class="title">日期</div> -->
          <el-form-item label="发布时间">
            <el-date-picker type="date" placeholder="选择日期"  v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item>
           <el-date-picker type="date" placeholder="选择日期"  v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <!--类型选择 -->
          <el-form-item label="操作员">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="marginTop:0;">查询</el-button>
          </el-form-item>
        </el-form>
        <!-- 表格-->
        <el-table
          :data="tableData"
          border
          style="width: 100% ;"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        >
          <el-table-column prop="date" label="日期" align="center"></el-table-column>
          <el-table-column prop="zd" label="终端类型" align="center"></el-table-column>
          <el-table-column prop="id" label="ID" align="center"></el-table-column>
          <el-table-column prop="type" label="类型" align="center"></el-table-column>
          <el-table-column prop="usdt" label="USDT" align="center"></el-table-column>
          <el-table-column prop="num" label="交易单号" align="center"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
export default {
  data() {
    return {
      content: null,
      editorOption: {},
      editorOption: {
        //theme:'bubble'
        placeholder: "请输入内容",
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image"]
          ]
        }
      },
      radio: "1",
      activeName: "first",
      input: "",
      input1: "",
      form: {
        name: ""
      }
    };
  },
  methods: {
    submit() {
      console.log(this.content);
      console.log(this.content); //输出的是一段html
      // console.log(this.$refs.myQuillEditor.quill.getText())
      // console.log(this.$refs.myQuillEditor) //获取到富文本对象
      //这里一定要注意写法,这里获取的是一个Delta对象
      console.log(this.$refs.myQuillEditor.quill.getContents());
      // console.log(this.$refs.myQuillEditor.quill.getText())
      // console.log(this.$refs.myQuillEditor.quill.root.innerHTML)
    },
    onEditorBlur() {
      //失去焦点事件
    },
    onEditorFocus() {
      //获得焦点事件
    },
    onEditorChange() {
      //内容改变事件
    }
  },
  computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  background-color: #f5f6fa;
  .my-form-users {
    margin-bottom: 24px;
  }
  .el-button--primary {
    width: 100px;
    height: 28px;
    padding: 0;
    margin-left: 78px;
    margin-top: 50px;
  }
}

.notice {
  font-size: 14px;
  color: #979dac;
  margin-right: 20px;
}
.editor {
  padding: 20px 0 20px 78px;
  box-sizing: border-box;
  width: 100%;
  height: 324px;
  .quill-editor {
    height: 100%;
  }
}
</style>
