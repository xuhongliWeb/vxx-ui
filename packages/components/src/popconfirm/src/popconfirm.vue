<template>
    <div :class="name">
        <Teleport to="body">
            <Transition name="fade-select" appear>
                <div ref="innerRef" :class="`${name}-inner`" v-show="show" @click="handleCancle">
                    <div :class="`${name}-inner-content`">
                        <span :class="`${name}-icon`">
                            <i v-if="type === 'success'" class="ri-checkbox-circle-fill"></i>
                            <i v-if="type === 'danger'" class="ri-close-circle-fill"></i>
                            <i v-if="type === 'warning'" class="ri-error-warning-fill"></i>
                            <i v-if="type === 'info'" class="ri-information-fill"></i>
                        </span>
                        <span :class="`${name}-text`">
                            {{ content }}
                        </span>
                    </div>

                    <div :class="`${name}-inner-footer`">
                        <k-space size="mini" justify="flex-end">
                            <k-button @click="handleCancle" size="mini">{{ cancleText }}</k-button>
                            <k-button @click="handleOk" :loading="okLoading" size="mini" type="primary" status="primary">
                                {{ okText }}
                            </k-button>
                        </k-space>
                    </div>
                </div>
            </Transition>
        </Teleport>

        <div ref="slotRef" :class="`${name}-slot`" @click.stop="handleClick">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import './style/popconfirm.less';
import { PropType, defineComponent, nextTick, onBeforeUnmount, ref, onMounted } from "vue";
import { PopconfirmPosition, PopconfirmType } from "./types";
import { off, on, throttle } from "@vxx-ui/utils/util";
export default defineComponent({
    name: 'k-popconfirm',
    props: {
        /**确认框文本内容 */
        content: { type: String, default: "" },
        /** 类型 */
        type: { type: String as PropType<PopconfirmType>, default: "info" },
        /** 弹出位置 */
        position: { type: String as PropType<PopconfirmPosition>, default: "top" },
        /** 确认按钮文本 */
        okText: { type: String, default: "确认" },
        /** 取消按钮文本 */
        cancleText: { type: String, default: "取消" },
        /** 触发确定前的回调，返回 false 则中断 */
        onBeforeOk: { type: Function, default: () => true },
    },
    emits: ["ok", "cancle"],
    setup(props, { emit }) {
        const name = "k-popconfirm";
        const show = ref<boolean>(false);
        const slotRef = ref();
        const innerRef = ref();

        const handleClick = () => {
            handleResize();
            show.value = true;
        };

        const handleResize = () => {
            const slotRect = slotRef.value?.getBoundingClientRect();
            console.log(slotRect, 'slotRect')
            if (!slotRect) return;

            const position = {
                top: `top:${slotRect.top - 10 + document.documentElement.scrollTop}px;left:${slotRect.left + slotRect.width / 2
                    }px;transform: translateX(-50%) translateY(-100%);`,

                bottom: `top:${slotRect.top + slotRect.height + 10 + document.documentElement.scrollTop}px;left:${slotRect.left + slotRect.width / 2
                    }px;transform: translateX(-50%);`,

                left: `top:${slotRect.top + slotRect.height / 2 + document.documentElement.scrollTop}px;left:${slotRect.left - 10
                    }px;transform: translateX(-100%) translateY(-50%);`,

                right: `top:${slotRect.top + slotRect.height / 2 + document.documentElement.scrollTop}px;right:${slotRect.right
                    }px;transform: translateX(-100%) translateY(-50%);`,
            };

            innerRef.value &&
                innerRef.value.setAttribute("style", `${position[props.position]};display:${show.value ? "block" : "none"}`);
        };

        const handleCancle = () => {
            show.value = false;
            emit("cancle");
        };

        const okLoading = ref<boolean>(false);
        const handleOk = async () => {
            try {
                okLoading.value = true;
                const res = await props.onBeforeOk();
                if (!res) return;

                show.value = false;
                emit("ok");
            } catch (error) {
                console.log("[ Popconfirm -onBeforeOk error]", error);
            } finally {
                okLoading.value = false;
            }
        };

        onMounted(() => {
            nextTick(() => {
                on(window, "resize", throttle(handleResize, 100));
            });
        });

        onBeforeUnmount(() => {
            off(window, "resize", handleResize);
        });

        return {
            name,
            show,
            slotRef,
            innerRef,
            okLoading,
            handleClick,
            handleCancle,
            handleOk,
        };
    },
});
</script>

<style lang="less" scoped></style>
