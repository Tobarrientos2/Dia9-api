<script>
    import SocialLinks from "./Clickeable/SocialLinks.svelte";
    import TagLinks from "./Clickeable/TagLinks.svelte";
    import GreyText from "./Info/GreyText.svelte";
import LogoFooter from "./Logo/LogoFooter.svelte";

</script>
<div
    class="sticky bottom-0 flex flex-col justify-between gap-12 px-4 py-7 md:flex-col md:gap-x-12 md:px-10 lg:flex-row"
>
    <div class="flex flex-col items-start gap-4 md:w-full lg:w-fit">
       <LogoFooter></LogoFooter>
       <SocialLinks></SocialLinks>
       <GreyText></GreyText>
    </div>
    <div
        class="flex h-fit flex-row flex-wrap gap-x-4 gap-y-12 overflow-hidden pb-10"
    >
    </div>
</div>
