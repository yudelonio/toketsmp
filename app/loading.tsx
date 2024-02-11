import Center from "@/components/layouts/center";
import { SpinnerIcon } from "@/components/icons";
import AdScript from "@/components/ads";

export default function Loading() {
    return (
        <Center>
            <AdScript />
            <div role="status">
                <SpinnerIcon className="size-14 text-primary animate-spin"></SpinnerIcon>
                <span className="sr-only">Loading...</span>
            </div>
        </Center>
    );
}
