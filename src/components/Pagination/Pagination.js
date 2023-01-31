import { memo } from "react"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"

const PaginationComponent = ({ count, page, handleChange }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        color="primary"
        variant="outlined"
        shape="rounded"
        sx={{
          color: "white",
          button: {
            color: "white",
          },
          marginTop: "1rem",
        }}
      />
    </Stack>
  )
}

export default memo(PaginationComponent)
