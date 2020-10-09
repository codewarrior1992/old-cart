<template>
  <div class="admin-order">
    <Controlbar />
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Customer Email</th>
            <th>Total</th>
            <th>Time</th>
            <th>Status</th>
            <th>
              <i class="fas fa-ellipsis-h"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>codewrrior1992@gmail.com</td>
            <td>$147,00</td>
            <td>2020-10-25-1630</td>
            <td>
              <ul class="status">
                <li>
                  <a href="#">
                    Unpaid
                    <i class="fas fa-caret-down"></i>
                  </a>
                </li>
                <ul class="dropdown">
                  <li>
                    <a href="#">Paid</a>
                  </li>
                  <li>
                    <a href="#">Unpaid</a>
                  </li>
                </ul>
              </ul>
            </td>
            <td class="setting" width="140">
              <a href="#" class="removeBtn">
                <i class="fas fa-trash-alt"></i>
              </a>
              <a href="#" class="updateBtn">
                <i class="fas fa-cogs"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>codewrrior1992@gmail.com</td>
            <td>$147,00</td>
            <td>2020-10-25-1630</td>
            <td>
              <ul class="status">
                <li>
                  <a href="#">
                    Paid
                    <i class="fas fa-caret-down"></i>
                  </a>
                </li>
                <ul class="dropdown">
                  <li>
                    <a href="#">Paid</a>
                  </li>
                  <li>
                    <a href="#">Unpaid</a>
                  </li>
                </ul>
              </ul>
            </td>
            <td class="setting" width="140">
              <a href="#" class="removeBtn">
                <i class="fas fa-trash-alt"></i>
              </a>
              <a href="#" class="updateBtn">
                <i class="fas fa-cogs"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>codewrrior1992@gmail.com</td>
            <td>$147,00</td>
            <td>2020-10-25-1630</td>
            <td>
              <ul class="status">
                <li>
                  <a href="#">
                    Paid
                    <i class="fas fa-caret-down"></i>
                  </a>
                </li>
                <ul class="dropdown">
                  <li>
                    <a href="#">Paid</a>
                  </li>
                  <li>
                    <a href="#">Unpaid</a>
                  </li>
                </ul>
              </ul>
            </td>
            <td class="setting" width="140">
              <a href="#" class="removeBtn">
                <i class="fas fa-trash-alt"></i>
              </a>
              <a href="#" class="updateBtn">
                <i class="fas fa-cogs"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>codewrrior1992@gmail.com</td>
            <td>$147,00</td>
            <td>2020-10-25-1630</td>
            <td>
              <ul class="status">
                <li>
                  <a href="#">
                    Unpaid
                    <i class="fas fa-caret-down"></i>
                  </a>
                </li>
                <ul class="dropdown">
                  <li>
                    <a href="#">Paid</a>
                  </li>
                  <li>
                    <a href="#">Unpaid</a>
                  </li>
                </ul>
              </ul>
            </td>
            <td class="setting" width="140">
              <a href="#" class="removeBtn">
                <i class="fas fa-trash-alt"></i>
              </a>
              <a href="#" class="updateBtn">
                <i class="fas fa-cogs"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination />
  </div>
</template>
<script>
import Controlbar from "@/components/layout/Controlbar.vue";
import Pagination from "@/components/layout/Pagination.vue";
export default {
  components: {
    Controlbar,
    Pagination,
  },
  data() {
    return {
      image:
        "https://images.unsplash.com/photo-1593642703055-4b72c180d9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    };
  },
};
</script>
