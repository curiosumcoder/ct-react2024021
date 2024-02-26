'use server';

export async function getPlatform() {
    return `${process.platform}, ${new Date().toLocaleTimeString()}` ;
}