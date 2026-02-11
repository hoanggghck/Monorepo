import { Button } from "@repo/ui";
import React from "react";
import { useNavigate } from "react-router-dom";

interface ErrorPageProps {
  code?: number;
  title?: string;
  message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  code = 404,
  title = "Trang không tồn tại",
  message = "Trang bạn đang tìm kiếm có thể đã bị xoá hoặc không tồn tại.",
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-7xl font-extrabold tracking-tight text-primary">
          {code}
        </h1>
        <h2 className="mt-6 text-2xl font-semibold text-foreground">
          {title}
        </h2>
        <p className="mt-4 text-muted-foreground text-sm">
          {message}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate("/")}
          >
            Về trang chủ
          </Button>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
          >
            Tải lại trang
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
