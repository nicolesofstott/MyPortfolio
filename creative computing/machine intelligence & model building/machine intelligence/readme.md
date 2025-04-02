My Image Classification Model Training Approach

Tasks 1 & 2

Step 1 - Dataset Preparation

The dataset consists of four categories: cars, bicycles, mountains, and deer.
The directory was stored in Google Drive under the directory images/.

Split the dataset into three sets:

Training Set - 70%: Used for model training.
Validation Set - 20%: Used for model tuning and hyperparameter adjustments.
Test Set - 10%: Used for evaluating the final model performance.

This part of the script creates three separate directories (train/, validation/, and test/) and moves images accordingly.

Step 2 - Data Preprocessing

Data augmentation is applied to the training dataset to improve generalisation:

Rescaling: All images are normalised by dividing pixel values by 255.
Rotation: Images are rotated randomly to simulate different perspectives.
Width and height shifting: Random translations help refine small movements.
Shearing and zooming: Distortions improve model learning capacity.
Horizontal flipping: Helps with recognising mirrored objects, no vertical flips as it could cause effects of surreal photos.

Rescaled the validation and test sets to maintain data integrity.

Function is implemented to detect and remove corrupt images.

Step 3 - Model Selection

A Convolutional Neural Network (CNN) is chosen because of its effectiveness. Less parameters required, pooling layers and handles colour channels and depth well.

The model consists of:

Three convolutional layers with ReLU activation and max pooling to extract spatial features.
A flattening layer that converts the 2D feature maps into a 1D vector.
A fully connected dense layer with 256 neurons and ReLU activation to learn abstract representations.
A dropout layer to prevent overfitting by randomly disabling neurons during training.
An output layer with Softmax activation, enabling classification into 4 categories.

4. Model Compilation

The model is compiled using:

Optimiser: Adam (adaptive learning rate optimiser for fast convergence).
Loss Function: Categorical Crossentropy (appropriate for multi-class classification problems).
Metric: Accuracy (measuring the proportion of correctly classified images).

5. Model Training

The model is trained for 20 epochs with a batch size of 32.
The validation set is used during training to monitor performance and adjust hyperparameters accordingly.
A training history object is stored, allowing visualisation of trends in accuracy and loss over epochs.

6. Model Evaluation

After training, the model is evaluated on the test dataset to measure generalisation performance.
The final test accuracy is displayed, providing insight into the real-world applicability of the model.

7. Model Deployment & Prediction

The trained model is saved & stored in My Drive as image_classifier.h5 for future use.


Task 3

A separate script is implemented to fetch the trained model from Google Drive and classify an external image, it:

Loads the trained model from Google Drive.
Fetches a random external image from a specified file path.
Preprocesses the image by resizing it to 224x224 and normalising pixel values.
Predicts the most likely class by analysing probabilities for each category.
Displays the image with its predicted class label.