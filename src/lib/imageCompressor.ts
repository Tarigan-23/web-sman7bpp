// src/lib/imageCompressor.ts
export const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (event) => {
            const img = new Image()
            img.src = event.target?.result as string
            img.onload = () => {
                const canvas = document.createElement("canvas")
                let width = img.width
                let height = img.height

                const MAX_WIDTH = 1280
                const MAX_HEIGHT = 1280

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height = Math.round((height * MAX_WIDTH) / width)
                        width = MAX_WIDTH
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width = Math.round((width * MAX_HEIGHT) / height)
                        height = MAX_HEIGHT
                    }
                }

                canvas.width = width
                canvas.height = height

                const ctx = canvas.getContext("2d")
                ctx?.drawImage(img, 0, 0, width, height)

                let quality = 0.7
                const tryCompress = () => {
                    canvas.toBlob(
                        (blob) => {
                            if (!blob) {
                                reject(new Error("Gagal melakukan kompresi gambar."))
                                return
                            }

                            if (blob.size > 200000 && quality > 0.1) {
                                quality -= 0.1
                                tryCompress()
                            } else {
                                const compressedFile = new File([blob], file.name, {
                                    type: file.type,
                                    lastModified: Date.now(),
                                })
                                resolve(compressedFile)
                            }
                        },
                        file.type,
                        quality
                    )
                }

                tryCompress()
            }
            img.onerror = (error) => reject(error)
        }
        reader.onerror = (error) => reject(error)
    })
}