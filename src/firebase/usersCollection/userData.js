const onSubmit = async (data: IImgUploadData) => {
    try {
      if (isFetching) {
        return;
      }
      clearErrors();
      Keyboard.dismiss();
      setIsFetching(true);
      const userUid = state.user!.uid;
      const response = await sendLocalImgToStorage(userUid, {
        uri: localImg.uri,
        fileName: localImg.fileName,
      });
      if (!response) {
        throw new Error(
          'On submitting upload image form: cannot upload image to storage',
        );
      }

      const fetchedUrl = (await response.getDownloadURL()) as string;
      const newImg = {
        title: data.title,
        imgUrl: fetchedUrl,
        description: data.description ?? '',
        fileName: localImg.fileName,
      };

      await addFirestoreGalleryUserImage(userUid, newImg);
      addNewImgToGallery(newImg);
      setUploadImageModal(false);
      setIsFetching(false);
      return;
    } catch (error: any) {
      console.log('onSubmitting galleryImg error is:' + error);
      setIsFetching(false);
      return;
    }
  };

  // Image
  const retrieveImg = async () => {
    try {
      setImgError('');
      const localImgToUpload: any = await retrieveLocalImg();
      if (!localImgToUpload) {
        throw new Error('Image not available');
      }

      setLocalImg(localImgToUpload);
      const localImgUri = localImgToUpload.uri as string;
      setValue('image', localImgUri);
      return;
    } catch (error: any) {
      console.log('retrieveImg error: ' + error);
      setImgError('Image not available');
      return;
    }
  };