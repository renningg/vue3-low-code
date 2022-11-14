import { computed, defineComponent, inject } from "vue";
import './editor.scss'
export default defineComponent({
    props: {
        blocks: { type: Object }
    },
    setup(props) {
        const blockStyle = computed(() => ({
            top: `${props.blocks.top}` + 'px',
            left: `${props.blocks.left}` + 'px',
            zIndex: `${props.blocks.zIndex}`,
        }))
        const config = inject("config")
        const component = config.componentMap[props.blocks.key]
        const renderConmponent = component.render()
        console.log(renderConmponent);
        return () => {
            return <div class="editor-block" style={blockStyle}>
                {renderConmponent}
            </div>
        }
    }
})