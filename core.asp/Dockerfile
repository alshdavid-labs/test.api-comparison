FROM microsoft/dotnet:latest

WORKDIR /app
COPY . .

RUN dotnet restore
RUN dotnet build

CMD dotnet run
EXPOSE 5000