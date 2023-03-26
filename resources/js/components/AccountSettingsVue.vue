<template>
    <div class="h-full w-full p-[24px]">
        <div
            class="ml-auto mr-auto max-w-[100%] h-[600px] bg-white shadow-card rounded-[4px] overflow-hidden"
        >
            <div class="flex shadow-[0_4px_8px_-4px_rgba(94,86,105,.42)]">
                <div class="h-full w-full flex relative">
                    <div
                        v-for="(item, index) in settingItem"
                        @click="
                            rippleEffect($event, 'rgba(145, 85, 253, 0.5)');
                            selectItem(index);
                        "
                        class="flex px-[1.30rem] py-3 justify-center items-center px-1 cursor-pointer gap-3 relative overflow-hidden"
                        key="index"
                        :class="
                            item.selected
                                ? 'text-primary-base bg-primary-base bg-opacity-[.04] hover:bg-primary-base hover:bg-opacity-[.12]'
                                : 'text-icon-color hover:bg-primary-color-opac'
                        "
                    >
                        <span class="fill-current" v-html="item.icon"></span>
                        <span class="text-[14px] font-medium">
                            {{ item.name }}
                        </span>
                    </div>
                    <div
                        class="absolute h-[2px] bg-primary-base bottom-0 transition-all duration-300 ease-in-out"
                        id="border"
                    ></div>
                </div>
            </div>
            <div class="w-full h-full flex relative">
                <div class="h-full w-full p-[12px]">
                    <div
                        class="w-full h-full absolute transition-all duration-300 ease-in-out transform"
                        :class="`translate-x-${viewTranslate[0]}`"
                    >
                        <div class="flex px-[16px] py-[20px]">
                            <img
                                src="../../../public/account-settings-images/default-img.png"
                                alt="profile"
                                class="w-[120px] h-[120px] object-cover rounded-[4px] mr-[24px]"
                            />
                            <div class="flex flex-col">
                                <div>
                                    <button
                                        class="uppercase mt-[20px] relative overflow-hidden mr-[12px] bg-primary-base text-white px-[23px] py-[4px] text-[14px] rounded-[5px] h-[38px] font-medium shadow-[0_4px_8px_-4px_rgba(94,86,105,.42)] hover:bg-opacity-95"
                                        @click="
                                            $refs.fileInput.click();
                                            rippleEffect(
                                                $event,
                                                'rgba(255, 255, 255, 0.5)'
                                            );
                                        "
                                    >
                                        Upload new Photo
                                    </button>
                                    <input
                                        ref="fileInput"
                                        type="file"
                                        hidden="hidden"
                                        accept=".jpeg,.png,.jpg,GIF"
                                    />

                                    <button
                                        @click="
                                            rippleEffect(
                                                $event,
                                                'rgba(255, 76, 81, 0.5)'
                                            )
                                        "
                                        class="uppercase relative overflow-hidden h-[38px] px-[23px] caret-primary-error font-medium text-primary-error border-primary-error border-[1px] rounded-[5px] text-[14px] hover:bg-primary-error hover:bg-opacity-10"
                                    >
                                        reset
                                    </button>
                                </div>
                                <span
                                    class="mt-[20px] mb-[16px] text-sm text-subtitle-color"
                                    >Allowed JPG, GIF or PNG. Max size of
                                    800K</span
                                >
                            </div>
                        </div>
                        <form>
                            <div
                                class="flex justify-around w-full items-center"
                            >
                                <div class="w-2/5 h-5 bg-red-500"></div>
                                <div class="w-2/5 h-5 bg-blue-600"></div>
                            </div>
                        </form>
                    </div>
                    <div
                        class="w-full h-full absolute bg-blue-600 transition-all duration-300 ease-in-out transform"
                        :class="`translate-x-${viewTranslate[1]}`"
                    >
                        <p>Partie 2</p>
                    </div>
                    <div
                        class="w-full h-full absolute bg-green-700 transition-all duration-300 ease-in-out transform"
                        :class="`translate-x-${viewTranslate[2]}`"
                    >
                        <p>partie 3</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AccountSettingsVue",
    data() {
        return {
            view: 0,
            viewTranslate: ["0", "full", "[200%]"],
            // data
            settingItem: [
                {
                    name: "ACCOUNT",
                    icon:
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"\n' +
                        '    width="20" height="20">\n' +
                        "    <path\n" +
                        '        d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"></path>\n' +
                        "</svg>\n",
                    selected: true,
                },
                {
                    name: "SECURITY",
                    icon:
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"\n' +
                        '     width="20" height="20">\n' +
                        "    <path\n" +
                        '        d="M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10A2,2 0 0,1 6,8H15V6A3,3 0 0,0 12,3A3,3 0 0,0 9,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,17A2,2 0 0,1 10,15A2,2 0 0,1 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17Z"></path>\n' +
                        "</svg>\n",
                    selected: false,
                },
                {
                    name: "INFO",
                    icon:
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"\n' +
                        '     width="20" height="20">\n' +
                        "    <path\n" +
                        '        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"></path>\n' +
                        "</svg>\n",
                    selected: false,
                },
            ],
        };
    },
    mounted() {
        this.$nextTick(() => {
            // code that assumes this.$el is in document
            this.adaptBorder();
        });
    },
    methods: {
        // methods
        selectItem(index) {
            this.settingItem.forEach((item, i) => {
                if (i === index) {
                    item.selected = true;
                } else {
                    item.selected = false;
                }
                this.view = index;
                this.changeViewTranslate();
            });
            this.adaptBorder();
        },
        changeViewTranslate() {
            //If view is 0 so viewTranslate[0] is 0 and viewTranslate[1] is 100 and viewTranslate[2] is 200
            //If view is 1 so viewTranslate[0] is -100 and viewTranslate[1] is 0 and viewTranslate[2] is 100
            //If view is 2 so viewTranslate[0] is -200 and viewTranslate[1] is -100 and viewTranslate[2] is 0
            //change the variable viewTranslate according to the variable view
            if (this.view === 0) {
                this.viewTranslate = ["0", "full", "[200%]"];
            } else if (this.view === 1) {
                this.viewTranslate = ["[-full]", "0", "full"];
            } else if (this.view === 2) {
                this.viewTranslate = ["[-200%]", "[-full]", "0"];
            }
        },
        rippleEffect(event, color) {
            const btn = event.currentTarget;
            const buttonRect = btn.getBoundingClientRect();
            const size = Math.max(buttonRect.width, buttonRect.height);
            const x = event.clientX - buttonRect.left - size / 2;
            const y = event.clientY - buttonRect.top - size / 2;

            const circle = document.createElement("span");
            circle.classList.add("ripple");
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;
            circle.style.top = `${y}px`;
            circle.style.left = `${x}px`;
            circle.classList.add("ripple");
            circle.style.backgroundColor = color;
            const ripple = btn.getElementsByClassName("ripple")[0];

            if (ripple) {
                btn.removeChild(ripple);
            }

            btn.appendChild(circle);
        },
        adaptBorder() {
            //setleft of border
            let left = 0;
            let width = 0;
            this.settingItem.forEach((item, i) => {
                if (item.selected) {
                    width =
                        document.getElementsByClassName("px-1")[i].offsetWidth;
                    left =
                        document.getElementsByClassName("px-1")[i].offsetLeft;
                }
            });
            document.getElementById("border").style.width = width + "px";
            document.getElementById("border").style.left = left + "px";
        },
        changeTranslateX() {
            this.translateX = this.view * -100;
        },
    },
};
</script>

<style>
span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.fade-enter-active,
.fade-leave-active {
    /*Translate x*/
    transition: transform 0.5s;
}
</style>
