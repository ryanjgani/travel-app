# Deploy Docker Image on Kubernetes using Minikube

### Frontend React app

**Docker configuration**  
Make sure you are at the `./frontend` folder

-   Ensure Docker is running
-   Create Docker file `Dockerfile.prod`
-   Build Docker image

        $ docker build -t <DockerHub_username>/travel-app-frontend -f Dockerfile.prod .

-   Push the image to Docker Hub

        $ docker push <DockerHub_username>/travel-app-frontend

-   Create Kubernetes deployment and service file `k8.yaml`

**Kubernetes configuration**

-   Ensure Minikube is running

        $ minikube start

-   Create a deployment using `k8.yaml` (change image name to your image in line 17)

        $ kubectl apply -f k8.yaml

-   Check that the deployed app is running on the set deployment pod
    ```
    $ kubectl get pods
    $ kubectl get svc
    ```
-   Once the pods are running, you can access the Kubernetes-deployed app service

        $ minikube service travel-app-frontend-svc

    This will assign Kubernetes a static local URL and run your application on the browser.

**Clean up**

    $ kubectl delete svc travel-app-frontend-svc
    $ kubectl delete deployment travel-app-frontend
    $ minikube stop
