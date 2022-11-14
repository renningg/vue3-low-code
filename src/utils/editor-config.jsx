import { defineComponent } from "vue";

function createEditorConfig() {
    const componentList = []
    const componentMap = {}
    return {
        componentList,
        componentMap,
        register: (component) => {
            componentList.push(component);
            componentMap[component.key] = component;
        }
    }
}
export let registerConfig = createEditorConfig()

registerConfig.register({
    label: "文本",
    preview: () => "预览文本",
    render: () => "渲染文本",
    key:  "text"
})
registerConfig.register({
    label: "按钮",
    preview: () => <el-button type="primary">预览按钮</el-button>,
    render: () => <el-button type="primary">渲染按钮</el-button>,
    key:  "button"
})
registerConfig.register({
    label: "输入框",
    preview: () => <el-input placeholder="预览输入框">预览按钮</el-input>,
    render: () => <el-input placeholder="渲染输入框">预览按钮</el-input>,
    key: "input"
})