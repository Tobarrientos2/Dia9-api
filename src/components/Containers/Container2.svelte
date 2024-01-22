<script>
  import { getService } from "../../stores/scStore";

  
  export let iABServices_arr  = getService().iABServices_arr;
</script>

<div class="flex flex-col items-center justify-center bg-[#F5F5F4]">
    <div class="w-responsive-wide grid grid-cols-1 gap-5 py-10 lg:grid-cols-2">
        {#each iABServices_arr as {sc_1, sc_2}}
        <div
            class=" skiff-border-raised flex h-[520px] flex-col overflow-hidden col-span-2 lg:col-span-1 pointer-events-none w-full cursor-default rounded-xl bg-[#FAFAF9] px-4 pb-0 pt-6 md:pointer-events-auto md:px-7 md:pt-7"
        >
            <div class="flex max-w-[542px] flex-col gap-2.5 pb-16">
                <span class="body-medium md:body-large !font-medium"
                    >{sc_1}</span
                ><span class="body-small md:body-medium text-gray-400"
                    >{sc_2}</span
                >
            </div>
            <div class="flex flex-col gap-y-2">
                <div
                    class="skiff-border-raised box-border flex h-fit items-center justify-between gap-y-2 overflow-hidden rounded-lg bg-white p-4"
                >
                    <div class="flex items-center gap-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            class="[&amp;>*]:fill-green-500"
                            ><path
                                fill="#000"
                                fill-opacity="0.57"
                                fill-rule="evenodd"
                                d="m16.422 7.256-8.089 8.09-4.756-4.757 1.179-1.178 3.577 3.577 6.91-6.91 1.18 1.178Z"
                                clip-rule="evenodd"
                            ></path></svg
                        >
                        <div class="flex flex-col">
                            <span class="body-medium text-[15px]"
                                >gilmoregirl.com</span
                            ><span class="body-small text-[13px] text-gray-600"
                                >Renews Jan 2. 2025</span
                            >
                        </div>
                    </div>
                    <div class="flex items-center gap-x-3">
                        <div
                            class="skiff-border-raised body-small rounded bg-orange-100 px-[5px] py-[2px] font-mono text-[13px] uppercase text-orange-500"
                        >
                            Default
                        </div>
                        <div class="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                class="[&amp;>*]:fill-gray-500"
                                ><path
                                    fill="#000"
                                    fill-opacity="0.34"
                                    fill-rule="evenodd"
                                    d="M8.307 12a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm4.923 0a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm3.693 1.23a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z"
                                    clip-rule="evenodd"
                                ></path></svg
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                class="[&amp;>*]:fill-gray-500"
                                ><path
                                    fill="#000"
                                    fill-opacity="0.34"
                                    fill-rule="evenodd"
                                    d="M10.707 5.293 17.414 12l-6.707 6.707-1.414-1.414L14.586 12 9.293 6.707l1.414-1.414Z"
                                    clip-rule="evenodd"
                                ></path></svg
                            >
                        </div>
                    </div>
                </div>
                <div
                    class="skiff-border-raised box-border flex h-fit items-center justify-between gap-y-2 overflow-hidden rounded-lg bg-white p-4"
                >
                    <div class="flex items-center gap-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            class="[&amp;>*]:fill-green-500"
                            ><path
                                fill="#000"
                                fill-opacity="0.57"
                                fill-rule="evenodd"
                                d="m16.422 7.256-8.089 8.09-4.756-4.757 1.179-1.178 3.577 3.577 6.91-6.91 1.18 1.178Z"
                                clip-rule="evenodd"
                            ></path></svg
                        >
                        <div class="flex flex-col">
                            <span class="body-medium text-[15px]"
                                >rsarightaway.com</span
                            ><span class="body-small text-[13px] text-gray-600"
                                >Renews Jan 3. 2025</span
                            >
                        </div>
                    </div>
                    <div class="flex items-center gap-x-3">
                        <div class="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                class="[&amp;>*]:fill-gray-500"
                                ><path
                                    fill="#000"
                                    fill-opacity="0.34"
                                    fill-rule="evenodd"
                                    d="M8.307 12a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm4.923 0a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm3.693 1.23a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z"
                                    clip-rule="evenodd"
                                ></path></svg
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                class="[&amp;>*]:fill-gray-500"
                                ><path
                                    fill="#000"
                                    fill-opacity="0.34"
                                    fill-rule="evenodd"
                                    d="M10.707 5.293 17.414 12l-6.707 6.707-1.414-1.414L14.586 12 9.293 6.707l1.414-1.414Z"
                                    clip-rule="evenodd"
                                ></path></svg
                            >
                        </div>
                    </div>
                </div>
                <div
                    class="skiff-border-raised box-border flex h-fit items-center justify-between gap-y-2 overflow-hidden rounded-lg bg-white p-4"
                >
                    <div class="flex items-center gap-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            class="[&amp;>*]:fill-green-500"
                            ><path
                                fill="#000"
                                fill-opacity="0.57"
                                fill-rule="evenodd"
                                d="m16.422 7.256-8.089 8.09-4.756-4.757 1.179-1.178 3.577 3.577 6.91-6.91 1.18 1.178Z"
                                clip-rule="evenodd"
                            ></path></svg
                        >
                        <div class="flex flex-col">
                            <span class="body-medium text-[15px]"
                                >diffiecube.com</span
                            ><span class="body-small text-[13px] text-gray-600"
                                >Renews Feb 1. 2025</span
                            >
                        </div>
                    </div>
                    <div class="flex items-center gap-x-3">
                        <div class="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                class="[&amp;>*]:fill-gray-500"
                                ><path
                                    fill="#000"
                                    fill-opacity="0.34"
                                    fill-rule="evenodd"
                                    d="M8.307 12a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm4.923 0a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm3.693 1.23a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z"
                                    clip-rule="evenodd"
                                ></path></svg
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                class="[&amp;>*]:fill-gray-500"
                                ><path
                                    fill="#000"
                                    fill-opacity="0.34"
                                    fill-rule="evenodd"
                                    d="M10.707 5.293 17.414 12l-6.707 6.707-1.414-1.414L14.586 12 9.293 6.707l1.414-1.414Z"
                                    clip-rule="evenodd"
                                ></path></svg
                            >
                        </div>
                    </div>
                </div>
                <div
                    class="skiff-border-raised box-border flex h-fit items-center justify-between gap-y-2 overflow-hidden rounded-lg bg-white p-4"
                >
                    <div class="flex items-center gap-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            ><path
                                fill="#000"
                                fill-opacity="0.34"
                                fill-rule="evenodd"
                                d="M16.667 10a6.667 6.667 0 1 1-13.333 0 6.667 6.667 0 0 1 13.333 0Zm1.667 0a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0Zm-7.5-.038V5.833H9.167v4.871l3.61 3.249 1.114-1.24-3.057-2.75Z"
                                clip-rule="evenodd"
                            ></path></svg
                        >
                        <div class="flex flex-col">
                            <span class="body-medium text-[15px]"
                                >nightwatch.com</span
                            ><span class="body-small text-[13px] text-gray-600"
                                >Renews Feb 2. 2025</span
                            >
                        </div>
                    </div>
                    <div class="flex items-center gap-x-3">
                        <div
                            class="skiff-border-raised body-small rounded bg-[var(--bg-overlay-tertiary)] px-[5px] py-[2px] font-mono text-[13px] uppercase text-gray-400"
                        >
                            Unverified
                        </div>
                        <div class="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                class="[&amp;>*]:fill-gray-500"
                                ><path
                                    fill="#000"
                                    fill-opacity="0.34"
                                    fill-rule="evenodd"
                                    d="M8.307 12a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm4.923 0a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm3.693 1.23a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z"
                                    clip-rule="evenodd"
                                ></path></svg
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                class="[&amp;>*]:fill-gray-500"
                                ><path
                                    fill="#000"
                                    fill-opacity="0.34"
                                    fill-rule="evenodd"
                                    d="M10.707 5.293 17.414 12l-6.707 6.707-1.414-1.414L14.586 12 9.293 6.707l1.414-1.414Z"
                                    clip-rule="evenodd"
                                ></path></svg
                            >
                        </div>
                    </div>
                </div>
                <div
                    class="skiff-border-raised box-border flex h-fit items-center justify-between gap-y-2 overflow-hidden rounded-lg bg-white p-4"
                >
                    <div class="flex items-center gap-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            ><path
                                fill="#000"
                                fill-opacity="0.34"
                                fill-rule="evenodd"
                                d="M16.667 10a6.667 6.667 0 1 1-13.333 0 6.667 6.667 0 0 1 13.333 0Zm1.667 0a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0Zm-7.5-.038V5.833H9.167v4.871l3.61 3.249 1.114-1.24-3.057-2.75Z"
                                clip-rule="evenodd"
                            ></path></svg
                        >
                        <div class="flex flex-col">
                            <span class="body-medium text-[15px]"
                                >astro.world</span
                            ><span class="body-small text-[13px] text-gray-600"
                                >Renews Mar 5. 2025</span
                            >
                        </div>
                    </div>
                    <div class="flex items-center gap-x-3">
                        <div
                            class="skiff-border-raised body-small rounded bg-[var(--bg-overlay-tertiary)] px-[5px] py-[2px] font-mono text-[13px] uppercase text-gray-400"
                        >
                            Unverified
                        </div>
                        <div class="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                class="[&amp;>*]:fill-gray-500"
                                ><path
                                    fill="#000"
                                    fill-opacity="0.34"
                                    fill-rule="evenodd"
                                    d="M8.307 12a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm4.923 0a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm3.693 1.23a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z"
                                    clip-rule="evenodd"
                                ></path></svg
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                class="[&amp;>*]:fill-gray-500"
                                ><path
                                    fill="#000"
                                    fill-opacity="0.34"
                                    fill-rule="evenodd"
                                    d="M10.707 5.293 17.414 12l-6.707 6.707-1.414-1.414L14.586 12 9.293 6.707l1.414-1.414Z"
                                    clip-rule="evenodd"
                                ></path></svg
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
       {/each}
    </div>
</div>
