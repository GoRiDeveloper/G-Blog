import sharp from "sharp";
import { AppError } from "../../utils/app.error";
import { ERROR_MESSAGES } from "../../constants/error.constants";
import { HTTP_ERROR_CODES } from "../../constants/http.codes.constants";
import { ToWebpParams } from "../../types/global.types";

export const convertToWebp = async (
    { buffer, quality }: ToWebpParams
): Promise<Buffer | AppError> => {
    return await sharp(buffer)
                    .webp({ quality })
                    .toBuffer()
                    .catch(
                        _e =>
                            new AppError(ERROR_MESSAGES.IMG_OPTIMIZED_ERROR, HTTP_ERROR_CODES.INTERNAL_SERVER)
                    );
};