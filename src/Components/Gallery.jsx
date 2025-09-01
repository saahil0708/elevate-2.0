

"use client";
import { ThreeDMarquee } from "../Components/ui/3d-marquee";
export function ThreeDMarqueeDemo() {
  const images = [
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5x86ndBPkntDRIgTLohXOs5baQ3uEZAVyY9GC",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5Ca6BGlwwarTshFH2qLQgVjOB8mn70vt9Gyeb",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5tVLipgmEyKp7vbuh4aZnGcCs8ARDxHFO2LY0",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5iK7tueRXkhA6xHi4ILWcPj7Rg81esEKXtYpG",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5V0H6sVJBqCA8IE4RWkpQY10bdL7SKnhfwlJM",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5XqgaJQBdwE1zgNU9nBLxO62lZYuAWsqiRGCt",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5KErBrVovpGOZJ0MUag4QI3kRmCE7P1nwNtSF",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5D1Mxh8kQ57NPj9YlOJCumqw8S4bfTIih3gXv",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5k80SSdMYBRf87C5LUQXSgcykKxONi09ouWEG",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5XNdNRSBdwE1zgNU9nBLxO62lZYuAWsqiRGCt",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX51tVzCzFhoBK4jiLIxpqH12cfwXagPVrDvsQE",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5PmeYspAzBSLiewkCxXU8hRDP7Gcm6advYVo5",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX57v0fV5kRaEL32ihjAvdIlU4N0TBZzbXuGMPf",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5BBwWPoKzPWfylH5GYExmgnb83j4RheVQD0JN",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5V4vcxZJBqCA8IE4RWkpQY10bdL7SKnhfwlJM",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX51Rx0a6hoBK4jiLIxpqH12cfwXagPVrDvsQEY",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX51trpgwDhoBK4jiLIxpqH12cfwXagPVrDvsQE",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5jevHsmuwPDOZcf3RGji8gyb6rvsJnXCHtkIY",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5rcVPDaf8BWI64UPVzZcp0EidljyDOusNoxLG",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5EJM3A0VLj2uNUwsbW36KpmTHhezIOfoG4ydS",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5ts1iq2EyKp7vbuh4aZnGcCs8ARDxHFO2LY0S",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5XtChYcBdwE1zgNU9nBLxO62lZYuAWsqiRGCt",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5x86ndBPkntDRIgTLohXOs5baQ3uEZAVyY9GC",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5YzEehDkdqrAaPiXWyjJwRgVxh49pENQmO51K",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5J0fUczy9FUr8wSBmdRlxC2QcbsW6hGoM30u7",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5vg2aByz6a0ZqJ2rT7EoAFWNp1wtkhYeQnjm4",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5x86ndBPkntDRIgTLohXOs5baQ3uEZAVyY9GC",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5x86ndBPkntDRIgTLohXOs5baQ3uEZAVyY9GC",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5x86ndBPkntDRIgTLohXOs5baQ3uEZAVyY9GC",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5x86ndBPkntDRIgTLohXOs5baQ3uEZAVyY9GC",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5NNCP4gtD6A8SVb3P19FpC4LqXRxIiTuvty7J",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5JsooN2y9FUr8wSBmdRlxC2QcbsW6hGoM30u7",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5VHHm5NJBqCA8IE4RWkpQY10bdL7SKnhfwlJM",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5JsooN2y9FUr8wSBmdRlxC2QcbsW6hGoM30u7",
    "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5x86ndBPkntDRIgTLohXOs5baQ3uEZAVyY9GC",
  ];
  return (
    <div
      className="mx-auto my-10 max-w- rounded-3xl bg-[#020617] p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
export default ThreeDMarqueeDemo;
