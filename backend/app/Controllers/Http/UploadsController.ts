import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Application from '@ioc:Adonis/Core/Application';

export default class UploadsController {
  public async uploadImage({ request }: HttpContextContract) {
    const image = request.file('image', {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg'],
    });

    if (!image) {
      return { error: 'File not found' };
    }

    if (!image.isValid) {
      return { error: image.errors };
    }

    const fileName = `${new Date().getTime()}.${image.extname}`;
    await image.move(Application.publicPath('uploads/products'), {
      name: fileName,
    });

    return { path: `/uploads/products/${fileName}` };
  }
}
