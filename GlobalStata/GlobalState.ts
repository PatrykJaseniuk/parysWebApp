

export const registerdHooks: React.Dispatch<React.SetStateAction<boolean>>[] = [];


// setInterval(() => { registerdHooks.forEach((hook) => { hook((prev) => { console.log(prev); return !prev; }) }) }, 1000)
