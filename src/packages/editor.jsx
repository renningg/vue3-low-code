import { computed, defineComponent } from "vue";
import "./editor.scss";
import editorBlock from "./editor-block"
import {registerConfig as config} from "../utils/editor-config"
export default defineComponent({
    components: {
        editorBlock
    },
    props: {
        modelValue: { type: Object }
    },
    setup(props) {
        const data = computed({
            get() {
                return props.modelValue
            }
        });
        const contentStyle = computed(() => ({
            width: data.value.container.width + 'px',
            height: data.value.container.height + 'px',
        }))
        return () => <div class="editor">
            <div class="left">
                {
                    (config.componentList.map((component) => (
                        <div class="left-item">
                            <span>{component.label}</span>
                            <div>{component.preview()}</div>
                        </div>
                    )))
                }
            </div>
            <div class="top">菜单栏</div>
            <div class="right">属性控制栏目</div>
            <div class="container">
                {/* 负责产生滚动条 */}
                <div class="scroll">
                    {/* 产生内容区域 */}
                    <div class="content" style={contentStyle.value}>
                        {
                            (data.value.blocks.map((blocks) => (
                                <editorBlock blocks={blocks}></editorBlock>
                            )))
                        }
                    </div>
                </div>
            </div>
        </div>
    }

})